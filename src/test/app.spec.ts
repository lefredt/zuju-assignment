import "mocha";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../index";

chai.should();
chai.use(chaiHttp);

describe("APIs check", () => {
  describe("Integration test", () => {
    it("It should respond with data from database", (done) => {
      chai
        .request(app)
        .get("/api/v1/matches")
        .send({
          limit: 3,
          lastMatchId: 2,
          lastMatchDate: "2022-06-02"
        })
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.a("array");

          done();
        });
    });
  });

  describe("Unit test (Fixtures listing)", () => {
    it("Fixtures retrieval by offset and limit", (done) => {
      chai
        .request(app)
        .get("/api/v1/matches")
        .send({
          limit: 1
        })
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.a("array");
          expect(response.body[0].id).eq(1);
        });

      chai
        .request(app)
        .get("/api/v1/matches")
        .send({
          limit: 1,
          offset: 1
        })
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.a("array");
          expect(response.body[0].id).eq(2);
          done();
        });
    });
  });

  describe("Unit test (Fixtures calendar)", () => {
    it("Return unique dates that have fixtures", (done) => {
      chai
        .request(app)
        .get("/api/v1/calendar/matchDates")
        .send({
          start: "2022-06-12"
        })
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body.uniqueDates.length).eq(5);
        });

      chai
        .request(app)
        .get("/api/v1/calendar/matchDates")
        .send({
          start: "2022-06-15"
        })
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body.uniqueDates).to.be.a("array");
          expect(response.body.uniqueDates.length).eq(3);
          done();
        });
    });
  });
});
