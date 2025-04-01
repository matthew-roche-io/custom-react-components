declare namespace _default {
  export let title: string;
  export { Button as component };
  export namespace parameters {
    let layout: string;
  }
  export let tags: string[];
  export namespace argTypes {
    namespace backgroundColor {
      let control: string;
    }
  }
  export namespace args {
    let onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
  }
}
export default _default;
export namespace Primary {
  export namespace args_1 {
    let primary: boolean;
    let label: string;
  }
  export { args_1 as args };
}
export namespace Secondary {
  export namespace args_2 {
    let label_1: string;
    export { label_1 as label };
  }
  export { args_2 as args };
}
export namespace Large {
  export namespace args_3 {
    export let size: string;
    let label_2: string;
    export { label_2 as label };
  }
  export { args_3 as args };
}
export namespace Small {
  export namespace args_4 {
    let size_1: string;
    export { size_1 as size };
    let label_3: string;
    export { label_3 as label };
  }
  export { args_4 as args };
}
export namespace RocheTest {
  export namespace args_5 {
    let primary_1: boolean;
    export { primary_1 as primary };
    let label_4: string;
    export { label_4 as label };
  }
  export { args_5 as args };
}
import { Button } from "./Button";
