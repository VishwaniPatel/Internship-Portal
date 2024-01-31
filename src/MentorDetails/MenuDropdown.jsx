import { Menu, Modal, Group, Button } from "@mantine/core";
import { Link } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";
import { IconTrash, IconEdit } from "@tabler/icons-react";
function MenuDropdown(props) {
  const [opened, { open, close }] = useDisclosure(false);
  const id = props.data.id;
  const deleteMentor = (id) => {
    props.onDataReceived(id);
    close();
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Are Your Sure you want to delete?"
        centered
      >
        <Group position="center">
          <Button onClick={() => deleteMentor(id)}>Delete</Button>
          <Button onClick={close} color="gray">
            Cancel
          </Button>
        </Group>
      </Modal>

      <Menu.Dropdown>
        <Link to={"/edit-mentor/" + id}>
          <Menu.Item icon={<IconEdit size={14} />}>Edit</Menu.Item>
        </Link>

        <Menu.Item
          icon={<IconTrash size={14} />}
          onClick={open}
        >
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </>
  );
}

export default MenuDropdown;