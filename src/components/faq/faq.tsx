import { Accordion, Span, Text } from "@chakra-ui/react"
import type { FC } from "react";

interface IFAQ {
  value: string;
  title: string;
  text: string;
}

interface FAQProps {
  items: IFAQ[];
}

const FAQ  : FC<FAQProps> = ({items}) => {
  return (
    <Accordion.Root collapsible>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger _open={{ bg: "blue.subtle" }}>
            <Span 
                color="var(--text-color)" 
                fontFamily="var(--font-primary)"
                flex="1"
                fontSize="1.2rem"
            >
                    {item.title}
            </Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
                <Text  
                    textAlign="left" 
                    color="var(--text-color)"
                    fontFamily="var(--font-secondary)"
                >
                    {item.text}
                </Text>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default FAQ;