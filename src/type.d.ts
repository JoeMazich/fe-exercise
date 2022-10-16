interface ActionType {
  type: string;
  data: any;
}

type DispatchType = (ActionType) => void;

interface StateType {
  name: string;
  abbreviation: string;
}
