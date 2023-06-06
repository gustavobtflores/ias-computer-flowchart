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
    id: "leftins-getleftins",
    source: "leftins",
    target: "getleftins",
    label: "Sim",
    sourceHandle: "leftins.right",
  },
  {
    id: "getleftins-pcinc",
    source: "getleftins",
    target: "pcinc",
    sourceHandle: "getleftins.bottom",
    targetHandle: "pcinc.right",
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
  {
    id: "submx-submx1",
    source: "submx",
    target: "submx1",
  },
  {
    id: "submx1-submx2",
    source: "submx1",
    target: "submx2",
  },
  {
    id: "addmodmx-addmodmx1",
    source: "addmodmx",
    target: "addmodmx1",
  },
  {
    id: "addmodmx1-addmodmx2",
    source: "addmodmx1",
    target: "addmodmx2",
  },
  {
    id: "submodmx-submodmx1",
    source: "submodmx",
    target: "submodmx1",
  },
  {
    id: "submodmx1-submodmx2",
    source: "submodmx1",
    target: "submodmx2",
  },
  {
    id: "submodmx2-submodmx3",
    source: "submodmx2",
    target: "submodmx3",
  },
  {
    id: "addmodmx2-addmodmx3",
    source: "addmodmx2",
    target: "addmodmx3",
  },
  {
    id: "mulmx-mulmx1",
    source: "mulmx",
    target: "mulmx1",
  },
  {
    id: "mulmx1-mulmx2",
    source: "mulmx1",
    target: "mulmx2",
  },
  {
    id: "divmx-divmx1",
    source: "divmx",
    target: "divmx1",
  },
  {
    id: "divmx1-divmx2",
    source: "divmx1",
    target: "divmx2",
  },
  {
    id: "lsh-lsh1",
    source: "lsh",
    target: "lsh1",
  },
  {
    id: "rsh-rsh1",
    source: "rsh",
    target: "rsh1",
  },
];
