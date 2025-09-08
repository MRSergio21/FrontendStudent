'use client';

import React from 'react';
import { ModalFormType } from '../utils/modals.utils';

/* Internships
import CreateInternship from '../components/Modal/Internships/CreateInternship';*/

interface FormConfig<P> {
    component: React.ComponentType<any>;
    getProps: (data?: unknown) => P;
}

const formConfig: Partial<Record<ModalFormType, FormConfig<any>>> = {
    /* === Internships ===
    [ModalFormType.CREATE_INTERNSHIP]: {
        component: CreateInternship,
        getProps: () => ({}),
    },*/
};

export default function useFormType(
    type: ModalFormType | null,
    data?: unknown,
    ref?: React.Ref<any>,
): React.ReactNode {
    if (!type) return null;
    const cfg = formConfig[type];
    if (!cfg) return null;

    const { component: Component, getProps } = cfg;
    const props = getProps(data);
    return <Component ref={ref} {...props} />;
}
