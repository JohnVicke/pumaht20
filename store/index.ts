import { types } from "mobx-state-tree";

const Todo = types
  .model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
    user: types.maybe(types.reference(types.late(() => User))),
  })
  .actions((self) => ({
    setName(newName: any) {
      self.name = newName;
    },
    setUser(user: any) {
      if (user === "") {
        // When selected value is empty, set as undefined
        self.user = undefined;
      } else {
        self.user = user;
      }
    },
    toggle() {
      self.done = !self.done;
    },
  }));

const User = types.model({
  name: types.optional(types.string, ""),
});

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.map(Todo),
  })
  .actions((self) => ({
    addTodo(id: number, name: string) {
      self.todos.set(id.toString(), Todo.create({ name }));
    },
  }));

export const store = RootStore.create({});
