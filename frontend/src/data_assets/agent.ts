export const agent = {
  llm_chain: {
    memory: null,
    verbose: false,
    prompt: {
      input_variables: ["input", "agent_scratchpad"],
      output_parser: null,
      template:
        "You are an assistant that helps a company to find relevant news articles.\nAnswer the questions thoroughly and with as many details as you can and specially don't be afraid to say if you can't find the answer in the articles.\nYou have access to the following tools:\n\nCall Consultant: Ask the assistant to research the question\n\nUse the following format:\n\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take, should be one of [Call Consultant]\nAction Input: the input to the action\nObservation: the result of the action\n... (this Thought/Action/Action Input/Observation can repeat N times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n\nBegin! Remember to use the tools to help you.\n\nQuestion: {input}\n{agent_scratchpad}",
      template_format: "f-string",
      _type: "prompt",
    },
    llm: {
      model_name: "text-davinci-003",
      temperature: 0.0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      n: 1,
      best_of: 1,
      request_timeout: null,
      logit_bias: {},
      _type: "openai",
    },
    output_key: "text",
    _type: "llm_chain",
  },
  allowed_tools: null,
  return_values: ["output"],
  _type: "zero-shot-react-description",
};
