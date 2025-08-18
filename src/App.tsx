import Button from "./components/Button";
import Form from "./components/Form";
import OTPInput from "./components/OTPInput";
import Accordion from "./components/Accordion";
import Badge from "./components/Badge";
import { BsArrowRight, BsEnvelopeFill } from "react-icons/bs";
import { useState } from "react";
import Breadcrumb from "./components/Breadcrumb";
import Card from "./components/Card";
import { Link } from "react-router-dom";

export default function App() {
  const [OTP, setOTP] = useState("");

  console.log(OTP);
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
          size="md"
          icon={<BsEnvelopeFill />}
          className="self-start"
        >
          Click me
        </Button>
        <OTPInput onChange={(value) => setOTP(value)} />
        <Accordion
          data={[
            { title: "Who is chester?", text: "I don't know who he is" },
            { title: "Second tab", text: "This is some other text" },
            { title: "Third tab", text: "This is some other text" },
          ]}
        />
        <div className="flex gap-2 items-center">
          <Badge size="lg" color="neutral">
            Default
          </Badge>
          <Badge size="lg">Primary</Badge>
        </div>
        <div>
          <Breadcrumb
            links={[{ name: "Shop", url: "/shop" }, { name: <h1>Hello</h1> }]}
          />
        </div>
        <Card
          orientation="vertical"
          image={
            <img src="https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA" />
          }
        >
          <Link to="">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button size="sm" icon={<BsArrowRight />} iconPos="right">
            Read more
          </Button>
        </Card>
      </Form>
    </div>
  );
}
