import React, { useState, createContext, useContext, ReactNode } from 'react';

/**
 * Accordion 컴포넌트 - Compound Components 패턴
 *
 * 접을 수 있는 콘텐츠 섹션을 제공
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Section 1</AccordionTrigger>
 *     <AccordionContent>Content 1</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */

type AccordionType = 'single' | 'multiple';

interface AccordionContextType {
  expandedItems: string[];
  toggleItem: (value: string) => void;
  type: AccordionType;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within <Accordion>');
  }
  return context;
};

interface AccordionProps {
  children: ReactNode;
  type?: AccordionType;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  type = 'single',
  defaultValue,
  value: controlledValue,
  onValueChange,
  collapsible = false,
  className = '',
}) => {
  const getInitialValue = (): string[] => {
    if (controlledValue !== undefined) {
      return Array.isArray(controlledValue) ? controlledValue : [controlledValue];
    }
    if (defaultValue !== undefined) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  };

  const [expandedItems, setExpandedItems] = useState<string[]>(getInitialValue());

  const isControlled = controlledValue !== undefined;
  const currentExpandedItems = isControlled
    ? (Array.isArray(controlledValue) ? controlledValue : [controlledValue])
    : expandedItems;

  const toggleItem = (value: string) => {
    let newExpandedItems: string[];

    if (type === 'single') {
      // Single mode: only one item can be open
      if (currentExpandedItems.includes(value)) {
        newExpandedItems = collapsible ? [] : currentExpandedItems;
      } else {
        newExpandedItems = [value];
      }
    } else {
      // Multiple mode: multiple items can be open
      newExpandedItems = currentExpandedItems.includes(value)
        ? currentExpandedItems.filter(item => item !== value)
        : [...currentExpandedItems, value];
    }

    if (!isControlled) {
      setExpandedItems(newExpandedItems);
    }

    const returnValue = type === 'single' ? newExpandedItems[0] || '' : newExpandedItems;
    onValueChange?.(returnValue);
  };

  return (
    <AccordionContext.Provider value={{ expandedItems: currentExpandedItems, toggleItem, type }}>
      <div className={`divide-y divide-gray-200 ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemContextType {
  value: string;
  isExpanded: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined);

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('AccordionItem components must be used within <AccordionItem>');
  }
  return context;
};

interface AccordionItemProps {
  children: ReactNode;
  value: string;
  disabled?: boolean;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  disabled = false,
  className = '',
}) => {
  const { expandedItems } = useAccordion();
  const isExpanded = expandedItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isExpanded }}>
      <div
        className={`
          ${disabled ? 'opacity-50 pointer-events-none' : ''}
          ${className}
        `}
        data-state={isExpanded ? 'open' : 'closed'}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className = '',
}) => {
  const { toggleItem } = useAccordion();
  const { value, isExpanded } = useAccordionItem();

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      aria-expanded={isExpanded}
      className={`
        w-full px-4 py-3 flex items-center justify-between
        text-left font-medium hover:bg-gray-50
        transition-colors focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
    >
      <span>{children}</span>
      <svg
        className={`
          w-5 h-5 transition-transform duration-200
          ${isExpanded ? 'rotate-180' : ''}
        `}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className = '',
}) => {
  const { isExpanded } = useAccordionItem();

  return (
    <div
      className={`
        overflow-hidden transition-all duration-200
        ${isExpanded ? 'max-h-96' : 'max-h-0'}
      `}
      aria-hidden={!isExpanded}
    >
      <div className={`px-4 py-3 ${className}`}>
        {children}
      </div>
    </div>
  );
};

// 사용 예제
export const AccordionExample: React.FC = () => {
  const [value, setValue] = useState<string>('item-1');

  return (
    <div className="space-y-8 p-6 max-w-2xl">
      {/* Single Accordion */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Single Accordion</h3>
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that can be customized.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default with smooth transitions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Multiple Accordion */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Multiple Accordion</h3>
        <Accordion type="multiple" defaultValue={['faq-1', 'faq-2']}>
          <AccordionItem value="faq-1">
            <AccordionTrigger>What is React?</AccordionTrigger>
            <AccordionContent>
              React is a JavaScript library for building user interfaces.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>What are Hooks?</AccordionTrigger>
            <AccordionContent>
              Hooks are functions that let you use state and other React features
              in functional components.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>What is JSX?</AccordionTrigger>
            <AccordionContent>
              JSX is a syntax extension for JavaScript that looks similar to HTML.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Controlled Accordion */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Controlled Accordion</h3>
        <p className="text-sm text-gray-600 mb-2">
          Current value: {value || 'none'}
        </p>
        <Accordion type="single" value={value} onValueChange={setValue} collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content for section 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>Content for section 2</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" disabled>
            <AccordionTrigger>Section 3 (Disabled)</AccordionTrigger>
            <AccordionContent>Content for section 3</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
