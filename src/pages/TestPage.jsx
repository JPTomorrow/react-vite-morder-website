import "@/pages/TestPage.css";
import { motion } from "framer-motion";

const body = (
  <main style={{ padding: "1rem 0" }}>
    <h2>TestPage</h2>
    <motion.div animate={{ y: -5 }} transition={{ duration: 0.5 }}>
      <p>Test Animation</p>
    </motion.div>
  </main>
);

export default function TestPage() {
  return body;
}
