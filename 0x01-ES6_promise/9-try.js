export default function guardrail(mathFunction) {
  const queue = [];
  const message = 'Guardrail was processed';
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`${error.name}: ${error.message}`);
  }
  queue.push(`${message}`);
  return queue;
}
