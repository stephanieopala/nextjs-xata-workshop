import { getXataClient } from "@/xata"

const xata = getXataClient();

const handler = async (req, res) => {
  const { id } = req.body;
  await xata.db.todos.delete(id)
  res.end();
}

export default handler;