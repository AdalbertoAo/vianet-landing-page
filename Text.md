# 📄 Componente `Text`

## 📌 Visão geral

O componente **`Text`** foi criado para **padronizar o uso de tipografia** na aplicação, centralizando estilos de texto em um único lugar.

Em vez de espalhar classes do Tailwind por todo o projeto (`<h1 className="...">`, `<p className="...">`, etc.), o componente permite definir **estilos padrão por tipo de tag**, facilitando manutenção, consistência visual e escalabilidade.

---

## 🎯 Por que este componente existe?

* ✅ Garantir **consistência visual** em títulos e textos
* ✅ Centralizar estilos tipográficos (design system)
* ✅ Reduzir repetição de classes CSS
* ✅ Facilitar mudanças globais de tipografia
* ✅ Manter o código mais limpo e legível

---

## ⚙️ Como funciona

O componente recebe uma propriedade chamada `tag`, que define **qual elemento HTML será renderizado** (`h1`, `p`, `span`, etc).

Com base nessa tag:

1. O componente escolhe automaticamente o **conjunto de classes CSS** correspondente
2. Renderiza o elemento HTML correto
3. Permite adicionar classes extras através de `className`

---

## 🧱 Estrutura dos estilos

Os estilos são definidos em um objeto JavaScript, onde cada chave representa uma tag HTML:

* `h1` até `h6`
* `p`
* `span`
* `a`
* `div`

Cada tag possui um estilo padrão usando **Tailwind CSS**.

---

## 🧩 Sintaxe do componente

```jsx
<Text tag="tipo-da-tag" className="classes-opcionais">
  Conteúdo
</Text>
```

### Propriedades

| Propriedade | Tipo      | Obrigatória | Descrição                                                              |
| ----------- | --------- | ----------- | ---------------------------------------------------------------------- |
| `tag`       | string    | ❌           | Define a tag HTML a ser renderizada (`h1`, `p`, `a`, etc). Padrão: `p` |
| `children`  | ReactNode | ✅           | Conteúdo do texto                                                      |
| `className` | string    | ❌           | Classes adicionais para customização                                   |
| `...props`  | object    | ❌           | Qualquer outro atributo HTML (`href`, `onClick`, `id`, etc)            |

---

## 🚀 Exemplos de uso

### Título principal

```jsx
<Text tag="h1">Título Principal</Text>
```

---

### Subtítulo com customização

```jsx
<Text tag="h3" className="text-green-600">
  Subtítulo customizado
</Text>
```

---

### Parágrafo padrão

```jsx
<Text>
  Este é um parágrafo usando o estilo padrão do sistema.
</Text>
```

---

### Link

```jsx
<Text tag="a" href="/home">
  Ir para Home
</Text>
```

---

### Texto clicável

```jsx
<Text onClick={() => alert("clicou!")}>Texto interativo</Text>
```

---

## 🧠 Boas práticas

* Utilize sempre o componente `Text` para textos da aplicação
* Evite usar tags HTML de texto diretamente (`h1`, `p`, etc)
* Use `className` apenas para **ajustes pontuais**, não para redefinir toda a tipografia

---

## 📈 Benefícios a longo prazo

* 🔁 Mudanças globais de estilo em um único arquivo
* 📐 Base sólida para um design system
* 🧩 Facilita criação de variantes no futuro (`variant="title"`, `variant="body"`)
* 🧼 Código mais organizado e previsível

---

## ✅ Conclusão

O componente `Text` é uma abstração simples, porém poderosa, que ajuda a manter **consistência visual**, **produtividade** e **qualidade de código** em aplicações React modernas.

Ideal para projetos que usam **Tailwind CSS** e desejam escalar com organização.
