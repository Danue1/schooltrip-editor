import { LocationState } from "history";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps<LocationState>;

export const InternalLink = ({ children, ...props }: Props) => <NavLink {...props}>{children}</NavLink>;
