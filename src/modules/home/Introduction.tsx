import { Box } from "@mui/material";
import { useMemo } from "react";

export default function Introduction() {
  const data = [
    { id: "aaa", value: 4, name: "ass" },
    { id: "bbb", value: 3, name: "asss" },
    { id: "aaa", value: 6, name: "assss" },
    { id: "bbb", value: 9 },
    { id: "aaa", value: 8 },
    { id: "aaa", value: 7 },
  ];

  const result = useMemo(() => {
    const out = data.reduce((a: any, v: any) => {
      if (a[v.id]) {
        a[v.id].value = a[v.id].value + v.value;
      } else {
        a[v.id] = v;
      }
      return a;
    }, {});
    return Object.values(out);
  }, []);
  console.log("🚀 ~ file: Introduction.tsx:18 ~ result ~ result:", result);
  return <Box>Introduction</Box>;
}
