import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // substitua pelo caminho do seu arquivo de entrada
  format: ["cjs"],
  dts: true, // Adiciona a geração de arquivos de declaração
  sourcemap: true, // Se você precisar de sourcemaps
  clean: true, // Limpa a saída antes de construir
});
