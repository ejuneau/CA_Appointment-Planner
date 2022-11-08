import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option value={""} key={-1} selected="selected">
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};