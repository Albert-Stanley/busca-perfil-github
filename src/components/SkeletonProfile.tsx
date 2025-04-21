import { motion } from "framer-motion";

export function SkeletonProfile() {
  return (
    <motion.div
      className="w-full max-w-[804px] h-auto md:h-[257px] rounded-[25px] bg-gray-700 flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p-6 animate-pulse mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-gray-500" />
      <div className="flex flex-col justify-center gap-3 w-full text-center md:text-left">
        <div className="h-5 w-[60%] bg-gray-500 rounded self-center md:self-start" />
        <div className="h-3 w-[70%] bg-gray-500 rounded self-center md:self-start" />
      </div>
    </motion.div>
  );
}
