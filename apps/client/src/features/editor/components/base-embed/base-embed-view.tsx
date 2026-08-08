import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import { Box, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

// 社区版：数据库（Base）嵌入为企业版功能，此节点渲染一个占位提示。
export function BaseEmbedView(_props: NodeViewProps) {
  const { t } = useTranslation();

  return (
    <NodeViewWrapper>
      <Box p="md" style={{ border: "1px dashed", borderRadius: 8 }}>
        <Text c="dimmed" size="sm">
          {t("Database (Base) embeds are available in the enterprise edition.")}
        </Text>
      </Box>
    </NodeViewWrapper>
  );
}
