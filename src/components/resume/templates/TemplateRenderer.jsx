"use client";

import { templateRegistry } from "./templateRegistry";

export default function TemplateRenderer({
    templateId,
    resume,
}) {
    const TemplateComponent =
        templateRegistry[templateId] || templateRegistry.classic;

    return <TemplateComponent resume={resume} />;
}