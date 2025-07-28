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
