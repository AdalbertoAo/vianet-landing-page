# 🔘 Componente `Button`

## 📌 Visão geral

O componente **`Button`** foi criado para **padronizar o uso de botões** na aplicação, garantindo consistência visual, reutilização e facilidade de manutenção.

Ele abstrai estilos comuns de botões (cores, espaçamento, tipografia e bordas) e permite variar a aparência através da propriedade `variant`, sem repetir classes CSS em vários lugares do projeto.

---

## 🎯 Por que este componente existe?

* ✅ Padronizar botões primários e secundários
* ✅ Centralizar estilos em um único componente
* ✅ Evitar repetição de classes Tailwind
* ✅ Facilitar manutenção e mudanças globais
* ✅ Criar uma base sólida para um design system

---

## ⚙️ Como funciona

O componente recebe uma propriedade chamada `variant`, que define **o estilo visual do botão**.

Internamente:

1. Um objeto (`style`) mapeia cada variante para suas classes CSS
2. O componente escolhe o estilo com base na `variant`
3. Classes comuns (padding, fonte, bordas, cursor) são aplicadas a todos os botões
4. A largura (`w`) e altura (`h`) podem ser customizadas dinamicamente

A biblioteca **`clsx`** é utilizada para facilitar a composição de classes CSS.

---

## 🧱 Estrutura dos estilos

Atualmente, o componente possui as seguintes variantes:

* `primary`
* `secundary`

Cada variante possui um conjunto específico de classes CSS.

---

## 🧩 Sintaxe do componente

```jsx
<Button variant="primary" w="200px" h="48px">
  Texto do botão
</Button>
```

### Propriedades

| Propriedade | Tipo      | Obrigatória | Descrição                                                              |
| ----------- | --------- | ----------- | ---------------------------------------------------------------------- |
| `children`  | ReactNode | ✅           | Conteúdo interno do botão                                              |
| `variant`   | string    | ❌           | Define o estilo do botão (`primary` ou `secundary`). Padrão: `primary` |
| `w`         | string    | ❌           | Define a largura do botão (ex: `200px`, `100%`)                        |
| `h`         | string    | ❌           | Define a altura do botão (ex: `48px`)                                  |

---

## 🚀 Exemplos de uso

### Botão primário

```jsx
<Button>
  Enviar
</Button>
```

---

### Botão secundário

```jsx
<Button variant="secundary">
  Cancelar
</Button>
```

---

### Botão com tamanho customizado

```jsx
<Button w="250px" h="52px">
  Comprar agora
</Button>
```

---

## 🧠 Boas práticas

* Use o componente `Button` para **todas as ações clicáveis principais** da aplicação
* Evite criar botões diretamente com `<button>` fora deste componente
* Utilize `variant` para variações visuais, não classes manuais
* Prefira centralizar novas variantes no objeto `style`

---

## 📈 Benefícios a longo prazo

* 🔁 Mudança global de estilos em um único lugar
* 🎨 Consistência visual em toda a aplicação
* 🧩 Facilidade para adicionar novas variantes (`danger`, `success`, etc)
* 🧼 Código mais limpo e organizado

---

## 🔮 Possíveis evoluções

* Adicionar suporte a `disabled`
* Criar variantes como `outline`, `danger`, `ghost`
* Suporte a ícones (`startIcon`, `endIcon`)
* Integração com sistema de loading

---

## ✅ Conclusão

O componente `Button` é uma abstração essencial para aplicações React modernas, permitindo padronização, escalabilidade e manutenção simples dos botões.

Ele serve como base para um **design system consistente**, especialmente em projetos que utilizam **Tailwind CSS**.
