const fs = require("fs");
const csv = require("csv-parser");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function insertSubject(name) {
  let subject = await prisma.subject.findUnique({ where: { name } });
  if (!subject) {
    subject = await prisma.subject.create({ data: { name } });
  }
  return subject.id;
}

async function insertQuestion(subjectId, questionText) {
  const question = await prisma.question.create({
    data: {
      subjectId,
      question: questionText,
    },
  });
  return question.id;
}

async function insertOption(questionId, optionText, isCorrect) {
  await prisma.option.create({
    data: {
      questionId,
      optionText,
      isCorrect,
    },
  });
}

async function processRow(row) {
  const subjectId = await insertSubject(row.subject);
  const questionId = await insertQuestion(subjectId, row.question);

  for (let i = 1; i <= 4; i++) {
    const optionText = row[`option${i}`];
    const isCorrect = row[`correct${i}`].toLowerCase() === "true";

    if (optionText) {
      await insertOption(questionId, optionText, isCorrect);
    }
  }
}

function processCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        for (const row of results) {
          await processRow(row);
        }
        resolve();
      })
      .on("error", reject);
  });
}

(async () => {
  try {
    await processCSV("./400.csv");
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await prisma.$disconnect();
  }
})();
