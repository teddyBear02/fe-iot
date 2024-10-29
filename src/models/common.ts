import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export interface LayoutProps {
    children: ReactNode,
}

export type NextPageWithLayout = NextPage & {
    Layout?: (props: LayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export type HeaderProps = {
    collapsed?: boolean;
    setCollapsed?: (collapsed: boolean) => void;
}

export type PageLayoutProps = {
    title?: ReactNode | string;
    children: ReactNode | any;
    button?: ReactNode | string;
    footer?: ReactNode | string;
    width?: number;
    span?: number;
    handleSubmit?: () => void;
}