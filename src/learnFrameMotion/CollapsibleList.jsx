import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CollapsibleList() {
  const [expanded, setExpanded] = useState(null);
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="justify-center flex-col space-y-2 items-center flex h-screen">
      {items.map((item, index) => (
        <motion.div
          key={item}
          onClick={() => setExpanded(index === expanded ? null : index)}
          className="bg-yellow-300 p-6 rounded-2xl text-center"
        >
          <h3>{item}</h3>
          <AnimatePresence>
            {expanded === index && (
              <motion.p>
                This section
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default CollapsibleList;