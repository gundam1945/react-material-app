import { matchPath } from "react-router-dom";

test('Match about page', () => {
    matchPath("/app/about", "")
});