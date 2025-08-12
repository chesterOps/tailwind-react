import Button from "./components/Button";
import Form from "./components/Form";
import { BsEnvelopeFill } from "react-icons/bs";

export default function App() {
  return (
    <div>
      <Form className="max-w-md mx-auto">
        <Form.Input label="Email" placeholder="Email" helper="Email address." />
        <Form.Select label="Gender" helper="Input gender">
          <option value="">Select gender</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </Form.Select>
        <Form.Password label="Password" placeholder="Password" helper="Hello" />
        <Form.Textarea label="Message" placeholder="Hello there..." rows={6} />
        <Form.Checkbox
          label="Check this box out"
          id="Hello"
          helper="Please click me"
        />
        <Form.Fieldset legend="Countries">
          <Form.Radio label="United states" name="countries" id="us" />
          <Form.Radio label="United kingdom" name="countries" id="uk" />
        </Form.Fieldset>
        <Form.File
          label="Upload file"
          name="profile-picture"
          helper="A profile picture is useful to confirm your account"
        />
        <Form.Checkbox
          type="switch"
          label="Toggle me"
          helper="Hello toggle switch"
        />
        <Button
          type="button"
          size="lg"
          icon={<BsEnvelopeFill />}
          className="self-start"
        >
          Click me
        </Button>
      </Form>
    </div>
  );
}
