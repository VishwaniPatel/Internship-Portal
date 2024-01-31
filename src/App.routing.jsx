import React from "react";
import { Routes, Route, Navigate } from "react-router";
import AddMentorsDetail from "./MentorDetails/AddMentorsDetail";
import MentorDetails from "./MentorDetails/MentorDetails";


export const Routing = () => {
  return (
    <Routes>
      <Route path="/add-mentor" element={<AddMentorsDetail />}></Route>
      <Route path="/edit-mentor/:id" element={<AddMentorsDetail />}></Route>
      <Route path="/" element={<MentorDetails />}>
     
      </Route>
    </Routes>
  );
};