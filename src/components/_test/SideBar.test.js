import React from 'react';
import { NavLink } from 'react-router-dom';

describe("<NavLink  />", () => {
    it("1.contains correct passed prop", () => {
        const comp = (
            <NavLink to="/jobs"  className={"test"} >Jobs</NavLink>
        );
        expect(comp.props.to).toEqual("/jobs");
    });
    it("1.contains correct passed prop", () => {
        const comp = (
            <NavLink to="/sources"  className={"test"} >Sources</NavLink>
        );
        expect(comp.props.to).toEqual("/sources");
    });
    it("1.contains correct passed prop", () => {
        const comp = (
            <NavLink to="/destination"  className={"test"} >Destination</NavLink>
        );
        expect(comp.props.to).toEqual("/destination");
    });
    it("1.contains correct passed prop", () => {
        const comp = (
            <NavLink to="/update"  className={"test"} >Update</NavLink>
        );
        expect(comp.props.to).toEqual("/update");
    });
});