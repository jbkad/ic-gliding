import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HomeButtonLinks from "../components/HomeButtonLinks";

// href attribute should match expected URL
describe("HomeButtonLinks component", () => {
    test("Mailing list button navigates to correct URL path", () => {
        render(<HomeButtonLinks />);
        const mailingLink = screen.getByText("Mailing List");

        fireEvent.click(mailingLink);

        expect(mailingLink.getAttribute("href")).toBe(
            "https://union.us19.list-manage.com/subscribe?u=269e6fccce0e382e53a4d91ee&id=2153e388bc"
        );
    });

    test("Union website button navigates to correct URL path", () => {
        render(<HomeButtonLinks />);
        const unionLink = screen.getByText("Union Website");

        fireEvent.click(unionLink);

        expect(unionLink.getAttribute("href")).toBe(
            "https://www.imperialcollegeunion.org/activities/a-to-z/gliding"
        );
    });
});
