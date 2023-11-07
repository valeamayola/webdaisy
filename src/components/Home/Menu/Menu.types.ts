export interface MenuProps {
    items: Array<{
      key: string;
      href: string;
      children: React.ReactNode;
      hasNotification?: boolean;
      notificationCount?: number;
      disabled?: boolean;
    }>;
  }

  