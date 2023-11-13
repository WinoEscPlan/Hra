import { it, describe, expect } from "vitest";
import { matchRoute, matchRouteByName } from ".";
import warriorDetailPage from "../pages/warriorDetailPage";

describe("routes", () => {
  describe("matchRoute", () => {
    it("matches detail route with id", () => {
      const result = matchRoute("/detail-bojovnika/432");

      // expect(result).toMatchObject(
      expect(result).toEqual({
        path: "/detail-bojovnika/:id",
        component: warriorDetailPage,
        params: { id: "432" },
      });
    });

    it("matches fero as ID with fero", () => {
      const result = matchRoute("/detail-bojovnika/fero");

      expect(result).toEqual({
        path: "/detail-bojovnika/:id",
        component: warriorDetailPage,
        params: { id: "fero" },
      });
    });

    it("throws error when input is empty", () => {
      let isError = false;
      try {
        const result = matchRoute();
      } catch (error) {
        isError = true;
      }
      expect(isError).toBe(true);
    });

    it("throws error when input is empty", () => {
      expect(() => {
        matchRoute();
      }).toThrowError();
    });

    it("can find paramater on first position", () => {
      const result = matchRoute("/jano/bojovnik/5423");

      expect(result).toEqual({
        path: "/:foo/bojovnik/:id",
        component: warriorDetailPage,
        params: { foo: "jano", id: "5423" },
      });
    });
  });
});

// dalsi it /fero  params (id: fero)
/*const user = {
  name: "Matt",
  age: 22,
};

test("Matt is 22", () => {
  expect(user.name).toBe("Matt");
  expect(user.age).toBe(22);
});*/
