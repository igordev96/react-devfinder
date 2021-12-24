import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      task: Model,
    },

    seeds(server) {
      server.create("task", {
        checked: true,
        id: 234,
        text: "Hey Ho",
      })
      server.create("task", {
        checked: false,
        id: 331,
        text: "Boas",
      })
    },

    routes() {
      this.namespace = "api"

      this.get("/tasks", (schema) => {
        return schema.tasks.all()
      })

      this.post("/tasks", (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create("task", data)
      })

      this.delete("/tasks/:id", (schema, request) => {
        let id = request.params.id

        return schema.tasks.find(id).destroy()
      })
    }
  })

  return server
}