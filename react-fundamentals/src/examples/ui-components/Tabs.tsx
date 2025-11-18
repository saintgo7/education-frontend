import React, { useState, createContext, useContext, ReactNode } from 'react';

/**
 * Tabs 컴포넌트 - Compound Components 패턴 사용
 *
 * 탭 네비게이션을 제공하는 재사용 가능한 컴포넌트
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 * ```
 */

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within <Tabs>');
  }
  return context;
};

interface TabsProps {
  children: ReactNode;
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  value: controlledValue,
  onValueChange,
  orientation = 'horizontal',
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = controlledValue !== undefined;
  const activeTab = isControlled ? controlledValue : internalValue;

  const setActiveTab = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, orientation }}>
      <div className={`tabs-root ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => {
  const { orientation } = useTabs();

  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      className={`
        flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}
        border-b ${orientation === 'vertical' ? 'border-r' : 'border-b'}
        border-gray-200
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  disabled?: boolean;
  className?: string;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  children,
  value,
  disabled = false,
  className = '',
}) => {
  const { activeTab, setActiveTab, orientation } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => !disabled && setActiveTab(value)}
      className={`
        px-4 py-2 font-medium text-sm transition-colors
        ${orientation === 'vertical' ? 'text-left' : 'text-center'}
        ${isActive
          ? 'text-blue-600 border-blue-600'
          : 'text-gray-600 hover:text-gray-900'
        }
        ${orientation === 'vertical'
          ? `border-r-2 ${isActive ? 'border-r-blue-600 bg-blue-50' : 'border-r-transparent'}`
          : `border-b-2 ${isActive ? 'border-b-blue-600' : 'border-b-transparent'}`
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
  forceMount?: boolean;
}

export const TabsContent: React.FC<TabsContentProps> = ({
  children,
  value,
  className = '',
  forceMount = false,
}) => {
  const { activeTab } = useTabs();
  const isActive = activeTab === value;

  if (!isActive && !forceMount) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      aria-hidden={!isActive}
      className={`
        p-4 focus:outline-none
        ${!isActive && forceMount ? 'hidden' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// 사용 예제
export const TabsExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div className="space-y-8 p-6">
      {/* 기본 Tabs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">기본 Tabs</h3>
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <div className="space-y-2">
              <h4 className="font-medium">Profile Information</h4>
              <p className="text-gray-600">
                Manage your profile information here.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="account">
            <div className="space-y-2">
              <h4 className="font-medium">Account Settings</h4>
              <p className="text-gray-600">
                Configure your account settings.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="space-y-2">
              <h4 className="font-medium">Application Settings</h4>
              <p className="text-gray-600">
                Customize your application preferences.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* 제어된 Tabs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">제어된 Tabs</h3>
        <p className="text-sm text-gray-600 mb-2">
          Active: {activeTab}
        </p>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Account content
          </TabsContent>
          <TabsContent value="password">
            Password content
          </TabsContent>
          <TabsContent value="notifications">
            Notifications content
          </TabsContent>
        </Tabs>
      </div>

      {/* 수직 Tabs */}
      <div>
        <h3 className="text-lg font-semibold mb-4">수직 Tabs</h3>
        <Tabs defaultValue="general" orientation="vertical">
          <div className="flex">
            <TabsList className="w-48">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="advanced" disabled>
                Advanced
              </TabsTrigger>
            </TabsList>
            <div className="flex-1 pl-4">
              <TabsContent value="general">
                General settings content
              </TabsContent>
              <TabsContent value="security">
                Security settings content
              </TabsContent>
              <TabsContent value="integrations">
                Integrations settings content
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
