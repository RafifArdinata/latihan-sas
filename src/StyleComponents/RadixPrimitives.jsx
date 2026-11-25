import React from "react";
import { DropdownMenu } from "radix-ui";

function RadixPrimitives() {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>
            🤚 Click
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              Profile
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              Contact
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default RadixPrimitives;