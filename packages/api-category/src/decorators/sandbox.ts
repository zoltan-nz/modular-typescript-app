export function controller() {
  return (target: IController) => {
    console.log(target);
  };
}
