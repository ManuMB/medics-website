import React from "react";
import Form from "../Components/Form";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <div style={{ background: theme.backgroundColor, color: theme.textColor }}>
      <h1 className="font-bold text-2xl pt-8">Contact</h1>
      <div className="pb-8">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
