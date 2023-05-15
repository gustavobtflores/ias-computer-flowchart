import { Edge } from "reactflow";

export const initialEdges: Edge[] = [
  {
    id: "start-nextinstruction",
    source: "start",
    target: "nextinstruction",
    label: "",
  },
  {
    id: "nextinstruction-yes",
    source: "nextinstruction",
    target: "yes",
    label: "Sim",
    sourceHandle: "nextinstruction.left",
    targetHandle: "yes.top",
  },
  {
    id: "nextinstruction-no",
    source: "nextinstruction",
    target: "no",
    label: "Não",
    sourceHandle: "nextinstruction.right",
  },
  {
    id: "no-no2",
    source: "no",
    target: "no2",
    sourceHandle: "no.bottom",
  },
  {
    id: "no2-leftins",
    source: "no2",
    target: "leftins",
    sourceHandle: "no2.bottom",
  },
  {
    id: "leftins-getrightins",
    source: "leftins",
    target: "getrightins",
    label: "Não",
    sourceHandle: "leftins.left",
  },
  {
    id: "getrightins-pcinc",
    source: "getrightins",
    target: "pcinc",
    sourceHandle: "getrightins.bottom",
  },
  {
    id: "yes-pcinc",
    source: "yes",
    target: "pcinc",
  },
  {
    id: "pcinc-decode",
    source: "pcinc",
    target: "decode",
  },
  {
    id: "decode-addmx",
    source: "decode",
    target: "addmx",
    sourceHandle: "decode.bottom",
  },
  {
    id: "decode-submx",
    source: "decode",
    target: "submx",
  },
  {
    id: "decode-mulmx",
    source: "decode",
    target: "mulmx",
  },
  {
    id: "decode-divmx",
    source: "decode",
    target: "divmx",
  },
  {
    id: "decode-addmodmx",
    source: "decode",
    target: "addmodmx",
  },
  {
    id: "decode-submodmx",
    source: "decode",
    target: "submodmx",
  },
  {
    id: "decode-lsh",
    source: "decode",
    target: "lsh",
  },
  {
    id: "decode-rsh",
    source: "decode",
    target: "rsh",
  },
  {
    id: "addmx-addmx1",
    source: "addmx",
    target: "addmx1",
  },
  {
    id: "addmx1-addmx2",
    source: "addmx1",
    target: "addmx2",
  },
];
