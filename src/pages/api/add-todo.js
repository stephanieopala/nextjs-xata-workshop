import { getXataClient } from "@/xata"

const xata = getXataClient();

const handler = async (req, res) => {
  const { text } = req.body;
  await xata.db.todos.create({ todo: text });
  res.end();
}

export default handler;