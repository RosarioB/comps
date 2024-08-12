import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        justo vel diam vulputate commodo. Aenean sed egestas urna, ut malesuada
        justo. Maecenas at ante vestibulum, venenatis purus vitae, aliquam
        metus. Sed convallis odio a consectetur rhoncus. Maecenas lorem turpis,
        tincidunt ut accumsan et, consectetur sed nulla. Nam tincidunt metus
        hendrerit aliquam porta. Sed facilisis pharetra velit eget imperdiet.
        Phasellus dignissim convallis quam sit amet vehicula. Fusce dapibus
        tellus at nunc venenatis, molestie faucibus eros vestibulum. Aenean eget
        pellentesque leo, ut molestie arcu. Proin quis consectetur nisi. Nunc
        condimentum, turpis et gravida ultricies, neque tortor cursus dui, a
        interdum sem dolor eget leo. Praesent fringilla vulputate ante, vel
        placerat nisi semper ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        justo vel diam vulputate commodo. Aenean sed egestas urna, ut malesuada
        justo. Maecenas at ante vestibulum, venenatis purus vitae, aliquam
        metus. Sed convallis odio a consectetur rhoncus. Maecenas lorem turpis,
        tincidunt ut accumsan et, consectetur sed nulla. Nam tincidunt metus
        hendrerit aliquam porta. Sed facilisis pharetra velit eget imperdiet.
        Phasellus dignissim convallis quam sit amet vehicula. Fusce dapibus
        tellus at nunc venenatis, molestie faucibus eros vestibulum. Aenean eget
        pellentesque leo, ut molestie arcu. Proin quis consectetur nisi. Nunc
        condimentum, turpis et gravida ultricies, neque tortor cursus dui, a
        interdum sem dolor eget leo. Praesent fringilla vulputate ante, vel
        placerat nisi semper ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        justo vel diam vulputate commodo. Aenean sed egestas urna, ut malesuada
        justo. Maecenas at ante vestibulum, venenatis purus vitae, aliquam
        metus. Sed convallis odio a consectetur rhoncus. Maecenas lorem turpis,
        tincidunt ut accumsan et, consectetur sed nulla. Nam tincidunt metus
        hendrerit aliquam porta. Sed facilisis pharetra velit eget imperdiet.
        Phasellus dignissim convallis quam sit amet vehicula. Fusce dapibus
        tellus at nunc venenatis, molestie faucibus eros vestibulum. Aenean eget
        pellentesque leo, ut molestie arcu. Proin quis consectetur nisi. Nunc
        condimentum, turpis et gravida ultricies, neque tortor cursus dui, a
        interdum sem dolor eget leo. Praesent fringilla vulputate ante, vel
        placerat nisi semper ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        justo vel diam vulputate commodo. Aenean sed egestas urna, ut malesuada
        justo. Maecenas at ante vestibulum, venenatis purus vitae, aliquam
        metus. Sed convallis odio a consectetur rhoncus. Maecenas lorem turpis,
        tincidunt ut accumsan et, consectetur sed nulla. Nam tincidunt metus
        hendrerit aliquam porta. Sed facilisis pharetra velit eget imperdiet.
        Phasellus dignissim convallis quam sit amet vehicula. Fusce dapibus
        tellus at nunc venenatis, molestie faucibus eros vestibulum. Aenean eget
        pellentesque leo, ut molestie arcu. Proin quis consectetur nisi. Nunc
        condimentum, turpis et gravida ultricies, neque tortor cursus dui, a
        interdum sem dolor eget leo. Praesent fringilla vulputate ante, vel
        placerat nisi semper ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        justo vel diam vulputate commodo. Aenean sed egestas urna, ut malesuada
        justo. Maecenas at ante vestibulum, venenatis purus vitae, aliquam
        metus. Sed convallis odio a consectetur rhoncus. Maecenas lorem turpis,
        tincidunt ut accumsan et, consectetur sed nulla. Nam tincidunt metus
        hendrerit aliquam porta. Sed facilisis pharetra velit eget imperdiet.
        Phasellus dignissim convallis quam sit amet vehicula. Fusce dapibus
        tellus at nunc venenatis, molestie faucibus eros vestibulum. Aenean eget
        pellentesque leo, ut molestie arcu. Proin quis consectetur nisi. Nunc
        condimentum, turpis et gravida ultricies, neque tortor cursus dui, a
        interdum sem dolor eget leo. Praesent fringilla vulputate ante, vel
        placerat nisi semper ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        justo vel diam vulputate commodo. Aenean sed egestas urna, ut malesuada
        justo. Maecenas at ante vestibulum, venenatis purus vitae, aliquam
        metus. Sed convallis odio a consectetur rhoncus. Maecenas lorem turpis,
        tincidunt ut accumsan et, consectetur sed nulla. Nam tincidunt metus
        hendrerit aliquam porta. Sed facilisis pharetra velit eget imperdiet.
        Phasellus dignissim convallis quam sit amet vehicula. Fusce dapibus
        tellus at nunc venenatis, molestie faucibus eros vestibulum. Aenean eget
        pellentesque leo, ut molestie arcu. Proin quis consectetur nisi. Nunc
        condimentum, turpis et gravida ultricies, neque tortor cursus dui, a
        interdum sem dolor eget leo. Praesent fringilla vulputate ante, vel
        placerat nisi semper ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        justo vel diam vulputate commodo. Aenean sed egestas urna, ut malesuada
        justo. Maecenas at ante vestibulum, venenatis purus vitae, aliquam
        metus. Sed convallis odio a consectetur rhoncus. Maecenas lorem turpis,
        tincidunt ut accumsan et, consectetur sed nulla. Nam tincidunt metus
        hendrerit aliquam porta. Sed facilisis pharetra velit eget imperdiet.
        Phasellus dignissim convallis quam sit amet vehicula. Fusce dapibus
        tellus at nunc venenatis, molestie faucibus eros vestibulum. Aenean eget
        pellentesque leo, ut molestie arcu. Proin quis consectetur nisi. Nunc
        condimentum, turpis et gravida ultricies, neque tortor cursus dui, a
        interdum sem dolor eget leo. Praesent fringilla vulputate ante, vel
        placerat nisi semper ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        justo vel diam vulputate commodo. Aenean sed egestas urna, ut malesuada
        justo. Maecenas at ante vestibulum, venenatis purus vitae, aliquam
        metus. Sed convallis odio a consectetur rhoncus. Maecenas lorem turpis,
        tincidunt ut accumsan et, consectetur sed nulla. Nam tincidunt metus
        hendrerit aliquam porta. Sed facilisis pharetra velit eget imperdiet.
        Phasellus dignissim convallis quam sit amet vehicula. Fusce dapibus
        tellus at nunc venenatis, molestie faucibus eros vestibulum. Aenean eget
        pellentesque leo, ut molestie arcu. Proin quis consectetur nisi. Nunc
        condimentum, turpis et gravida ultricies, neque tortor cursus dui, a
        interdum sem dolor eget leo. Praesent fringilla vulputate ante, vel
        placerat nisi semper ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        justo vel diam vulputate commodo. Aenean sed egestas urna, ut malesuada
        justo. Maecenas at ante vestibulum, venenatis purus vitae, aliquam
        metus. Sed convallis odio a consectetur rhoncus. Maecenas lorem turpis,
        tincidunt ut accumsan et, consectetur sed nulla. Nam tincidunt metus
        hendrerit aliquam porta. Sed facilisis pharetra velit eget imperdiet.
        Phasellus dignissim convallis quam sit amet vehicula. Fusce dapibus
        tellus at nunc venenatis, molestie faucibus eros vestibulum. Aenean eget
        pellentesque leo, ut molestie arcu. Proin quis consectetur nisi. Nunc
        condimentum, turpis et gravida ultricies, neque tortor cursus dui, a
        interdum sem dolor eget leo. Praesent fringilla vulputate ante, vel
        placerat nisi semper ut.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        justo vel diam vulputate commodo. Aenean sed egestas urna, ut malesuada
        justo. Maecenas at ante vestibulum, venenatis purus vitae, aliquam
        metus. Sed convallis odio a consectetur rhoncus. Maecenas lorem turpis,
        tincidunt ut accumsan et, consectetur sed nulla. Nam tincidunt metus
        hendrerit aliquam porta. Sed facilisis pharetra velit eget imperdiet.
        Phasellus dignissim convallis quam sit amet vehicula. Fusce dapibus
        tellus at nunc venenatis, molestie faucibus eros vestibulum. Aenean eget
        pellentesque leo, ut molestie arcu. Proin quis consectetur nisi. Nunc
        condimentum, turpis et gravida ultricies, neque tortor cursus dui, a
        interdum sem dolor eget leo. Praesent fringilla vulputate ante, vel
        placerat nisi semper ut.
      </p>
    </div>
  );
}

export default ModalPage;
