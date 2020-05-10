import http from "../http-common";

class BankAppService {
  getAll() {
    return http.get("/account");
  }

  get(id) {
    return http.get(`/account/${id}`);
  }

  create(data) {
    return http.post("/account", data);
  }

  update(data) {
    return http.put("/account", data);
  }

  delete(id) {
    return http.delete(`/account/${id}`);
  }

}

export default new BankAppService();
