import React, { useState } from "react";
import { Button, Form, Dropdown } from "react-bootstrap";

const Engine = () => {
  const [rules, setRules] = useState([
    {
      key: "age",
      output: {
        value: "",
        operator: ">=",
        score: ""
      }
    }
  ]);

  const [combinator, setCombinator] = useState("and");

  const handleRuleChange = (index, field, value) => {
    const updatedRules = [...rules];
    if (field === "key") {
      updatedRules[index][field] = value;
    } else {
      updatedRules[index].output[field] = value;
    }
    setRules(updatedRules);
  };

  const addHandler = () => {
    setRules([
      ...rules,
      { key: "", output: { value: "", operator: ">=", score: "" } }
    ]);
  };

  const deleteHandler = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  const handleSubmit = () => {
    const expressionOutput = {
      rules,
      combinator
    };
    console.log(expressionOutput);
  };

  return (
    <div>
      <Form>
        {rules.map((rule, index) => (
          <div key={index}>
            <Form.Group>
              <Form.Label>Rule Type</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {rule.key}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => handleRuleChange(index, "key", "age")}
                  >
                    Age
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      handleRuleChange(index, "key", "Credit Score")
                    }
                  >
                    Credit score
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      handleRuleChange(index, "key", "Amount Score")
                    }
                  >
                    Amount Score
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Form.Group>
              <Form.Label>Operator</Form.Label>
              <Form.Control
                as="select"
                value={rule.output.operator}
                onChange={(e) =>
                  handleRuleChange(index, "operator", e.target.value)
                }
              >
                <option>{">"}</option>
                <option>{"<"}</option>
                <option>{">="}</option>
                <option>{"<="}</option>
                <option>{"="}</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="text"
                value={rule.output.value}
                onChange={(e) =>
                  handleRuleChange(index, "value", e.target.value)
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Score</Form.Label>
              <Form.Control
                type="text"
                value={rule.output.score}
                onChange={(e) =>
                  handleRuleChange(index, "score", e.target.value)
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Combinator</Form.Label>
              <Form.Control
                as="select"
                value={combinator}
                onChange={(e) => setCombinator(e.target.value)}
              >
                <option>and</option>
                <option>or</option>
              </Form.Control>
            </Form.Group>

            <Button
              style={{ margin: "10px" }}
              variant="danger"
              onClick={() => deleteHandler(index)}
            >
              Delete Rule
            </Button>
          </div>
        ))}

        <Button
          style={{ margin: "10px" }}
          variant="primary"
          onClick={addHandler}
        >
          Add Rule
        </Button>

        <Button variant="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Engine;
