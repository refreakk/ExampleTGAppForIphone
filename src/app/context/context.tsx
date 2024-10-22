import React, { createContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface IProps {
    children: React.ReactNode;
}

export const webAppContext = createContext<Telegram["WebApp"]>({} as Telegram["WebApp"]);

export const WebAppProvider = ({ children }: IProps) => {
    const [app, setApp] = useState({} as Telegram["WebApp"]);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setApp(Telegram.WebApp);
    }, []);

    useEffect(() => {
        if (!app) return;
        if (app.ready) {
            app.ready();
            app.expand();

            app.enableVerticalSwipes();

            const handleRouteChange = () => {
                if (pathname !== '/') {
                    app.BackButton.isVisible = true;
                    app.BackButton.onClick(() => {
                        router.back();
                    });
                } else {
                    app.BackButton.isVisible = false;
                }
            };

            handleRouteChange();
        }
    }, [app, pathname]);

    return (
        <webAppContext.Provider value={app}>{children}</webAppContext.Provider>
    );
};
