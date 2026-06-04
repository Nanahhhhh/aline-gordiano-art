
"""
padronizar_fotos.py
====================
Script para padronizar fotos de obras de arte do site da Aline Gordiano.

O que faz:
- Fundo branco puro em todas as fotos
- Proporção padronizada (3:4 portrait ou 4:3 landscape, detectado automaticamente)
- Obra centralizada e com margem
- Salva os arquivos prontos para subir no GitHub

Como usar:
1. Instale a dependência: pip install Pillow
2. Coloque todas as suas fotos numa pasta (ex: C:/fotos_originais)
3. Edite as variáveis PASTA_ENTRADA e PASTA_SAIDA abaixo
4. Rode: python padronizar_fotos.py
5. Suba os arquivos da pasta de saída para /public/artworks/ no GitHub
"""

from PIL import Image
import os

# ──────────────────────────────────────────
# CONFIGURAÇÕES — edite aqui
# ──────────────────────────────────────────

PASTA_ENTRADA = "./fotos_originais"   # pasta onde estão suas fotos
PASTA_SAIDA   = "./fotos_prontas"     # pasta onde serão salvas as fotos prontas

TAMANHO_FINAL = 1200          # largura ou altura máxima em pixels (mantém qualidade)
MARGEM_PERCENT = 0.05         # margem ao redor da obra (5% de cada lado)
COR_FUNDO = (255, 255, 255)   # branco puro
QUALIDADE_JPG = 92            # qualidade JPEG (0-100)

# ──────────────────────────────────────────
# SCRIPT — não precisa editar abaixo
# ──────────────────────────────────────────

FORMATOS_ACEITOS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff"}

def detectar_proporcao(img):
    """Detecta se a imagem é portrait ou landscape e retorna a proporção ideal."""
    w, h = img.size
    if h >= w:
        # portrait → proporção 3:4
        return (3, 4)
    else:
        # landscape → proporção 4:3
        return (4, 3)

def calcular_canvas(proporcao):
    """Calcula as dimensões do canvas final com base na proporção."""
    rx, ry = proporcao
    if rx >= ry:
        # landscape
        w = TAMANHO_FINAL
        h = int(TAMANHO_FINAL * ry / rx)
    else:
        # portrait
        h = TAMANHO_FINAL
        w = int(TAMANHO_FINAL * rx / ry)
    return w, h

def padronizar_imagem(caminho_entrada, caminho_saida):
    img = Image.open(caminho_entrada).convert("RGB")

    proporcao = detectar_proporcao(img)
    canvas_w, canvas_h = calcular_canvas(proporcao)

    # área útil (descontando margem)
    margem_x = int(canvas_w * MARGEM_PERCENT)
    margem_y = int(canvas_h * MARGEM_PERCENT)
    area_w = canvas_w - 2 * margem_x
    area_h = canvas_h - 2 * margem_y

    # redimensiona a obra para caber na área útil mantendo proporção original
    img.thumbnail((area_w, area_h), Image.LANCZOS)

    # cria canvas branco
    canvas = Image.new("RGB", (canvas_w, canvas_h), COR_FUNDO)

    # centraliza a obra no canvas
    offset_x = (canvas_w - img.width) // 2
    offset_y = (canvas_h - img.height) // 2
    canvas.paste(img, (offset_x, offset_y))

    # salva
    canvas.save(caminho_saida, "JPEG", quality=QUALIDADE_JPG, optimize=True)
    print(f"  ✓ {os.path.basename(caminho_entrada)} → {canvas_w}×{canvas_h}px")

def main():
    if not os.path.exists(PASTA_ENTRADA):
        print(f"❌ Pasta de entrada não encontrada: {PASTA_ENTRADA}")
        print("   Crie a pasta e coloque suas fotos lá.")
        return

    os.makedirs(PASTA_SAIDA, exist_ok=True)

    arquivos = [
        f for f in os.listdir(PASTA_ENTRADA)
        if os.path.splitext(f)[1].lower() in FORMATOS_ACEITOS
    ]

    if not arquivos:
        print(f"❌ Nenhuma foto encontrada em: {PASTA_ENTRADA}")
        return

    print(f"\n🎨 Padronizando {len(arquivos)} foto(s)...\n")

    for nome in arquivos:
        entrada = os.path.join(PASTA_ENTRADA, nome)
        # salva sempre como .jpg
        nome_saida = os.path.splitext(nome)[0] + ".jpg"
        saida = os.path.join(PASTA_SAIDA, nome_saida)
        try:
            padronizar_imagem(entrada, saida)
        except Exception as e:
            print(f"  ✗ Erro em {nome}: {e}")

    print(f"\n✅ Pronto! Fotos salvas em: {PASTA_SAIDA}")
    print("   Suba esses arquivos para /public/artworks/ no GitHub.\n")

if __name__ == "__main__":
    main()