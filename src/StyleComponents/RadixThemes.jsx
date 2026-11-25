import React from 'react'
function RadixThemes() {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='soft'>
                    Option
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                     Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                   Duplicate
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default RadixThemes