import {
  CommandLineIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  LightBulbIcon,
  LinkIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import type { Edge, Node } from "@xyflow/react";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const nodeColors = {
  prompts: "#7C7C7C",
  llms: "#35ADAE",
  chains: "#FFDC35",
  agents: "#903BBE",
  tools: "#FF3434",
  memories: "#FF9135",
  elements: "#6344BE",
};

export const nodeIcons = {
  agents: RocketLaunchIcon,
  chains: LinkIcon,
  memories: CpuChipIcon,
  llms: LightBulbIcon,
  prompts: CommandLineIcon,
  tools: WrenchScrewdriverIcon,
  elements: ComputerDesktopIcon,
};

export function toFirstUpperCase(str: string) {
  return str
    .split(" ")
    .map((word, index) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

export function snakeToNormalCase(str: string) {
  return str
    .split("_")
    .map((word, index) => {
      if (!word) return "";
      if (index === 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(" ");
}

export function getConnectedNodes(edge: Edge, nodes: Array<Node>): Array<Node> {
  const sourceId = edge.source;
  const targetId = edge.target;
  const connectedNodes = nodes.filter(
    (node) => node.id === sourceId || node.id === targetId
  );
  return connectedNodes;
}

export const nodeNames = {
  prompts: "Prompts",
  llms: "LLMs",
  chains: "Chains",
  agents: "Agents",
  tools: "Tools",
  memories: "Memories",
  elements: "Elements",
};

export function isValidConnection(
  data,
  { source, target, sourceHandle, targetHandle }
) {
  if (
    targetHandle === sourceHandle.split("|")[0] ||
    sourceHandle.split("|")[0] === "str" ||
    data.types[targetHandle] === sourceHandle.split("|")[0]
  ) {
    let sourceNode = data.reactFlowInstance.getNode(source).data.node;
    if (!sourceNode) {
      if (
        !data.reactFlowInstance
          .getEdges()
          .find((e) => e.sourceHandle === sourceHandle)
      ) {
        return true;
      }
    } else if (
      (!sourceNode.template[sourceHandle.split("|")[1]].list &&
        !data.reactFlowInstance
          .getEdges()
          .find((e) => e.sourceHandle === sourceHandle)) ||
      sourceNode.template[sourceHandle.split("|")[1]].list
    ) {
      return true;
    }
  }

  return false;
}
