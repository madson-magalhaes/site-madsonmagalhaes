# Madson Presentation Design Skill

## Identidade Visual para Apresentações HTML

Esta skill define o padrão visual completo usado nas apresentações das Aulas 6, 7, 8 e 9. Use este guia para criar novas apresentações mantendo consistência total.

---

## 🎨 Paleta de Cores

### Cores Principais
```css
/* Background */
--bg-primary: #0A1128;        /* Azul escuro profundo */
--bg-secondary: #16213e;      /* Azul médio */
--bg-gradient: linear-gradient(135deg, #0A1128 0%, #16213e 100%);

/* Acento Principal */
--accent-primary: #FF6700;    /* Laranja vibrante - marca Madson */
--accent-glow: rgba(255, 103, 0, 0.2);
--accent-border: rgba(255, 103, 0, 0.3);

/* Cores Semânticas */
--color-blue: #3b82f6;        /* Azul info */
--color-green: #22c55e;       /* Verde sucesso */
--color-purple: #a855f7;      /* Roxo destaque */
--color-red: #ef4444;         /* Vermelho alerta/erro */
--color-yellow: #fbbf24;      /* Amarelo warning */

/* Textos */
--text-primary: #ffffff;      /* Branco puro */
--text-secondary: #d0d0d0;    /* Cinza claro */
--text-muted: #a0a0a0;        /* Cinza médio */
--text-faint: #666666;        /* Cinza escuro */
```

### Quando Usar Cada Cor

**🟠 Laranja (#FF6700):**
- Títulos principais (h1)
- Bordas de destaque
- Call-to-actions
- Elementos interativos
- Números importantes

**🔵 Azul (#3b82f6):**
- Informações técnicas
- Boxes informativos
- Diagramas de processo

**🟢 Verde (#22c55e):**
- Sucessos, aprovações
- Vantagens, benefícios
- Resultados positivos

**🟣 Roxo (#a855f7):**
- Conceitos avançados
- Features premium
- Destaques especiais

**🔴 Vermelho (#ef4444):**
- Alertas, avisos
- Problemas, desvantagens
- Críticas importantes

**🟡 Amarelo (#fbbf24):**
- Atenção moderada
- Notas, observações
- Highlights secundários

---

## 📐 Tipografia

### Família de Fontes
```css
font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
```

**Por quê Segoe UI:**
- Disponível em Windows (maioria dos usuários)
- Excelente legibilidade em projeções
- Moderna sem ser "tech demais"
- Fallback confiável (Roboto em Android/Linux)

### Hierarquia de Tamanhos

```css
/* Slides Normais (Informação Moderada) */
.slide-header h1 { font-size: 48px; }   /* Título slide */
.slide-header h2 { font-size: 24px; }   /* Subtítulo slide */
.box h3 { font-size: 28px; }            /* Título de seção */
.box p { font-size: 20px; }             /* Texto corpo */
.highlight-box p { font-size: 28px; }   /* Destaque */
.comparison-table th { font-size: 20px; } /* Cabeçalho tabela */
.comparison-table td { font-size: 18px; } /* Célula tabela */

/* Slides Simplificados (Menos Informação) */
.slide-header h1 { font-size: 52px; }   /* +8% */
.slide-header h2 { font-size: 26px; }   /* +8% */
.box h3 { font-size: 32px; }            /* +14% */
.box p { font-size: 22px; }             /* +10% */
.highlight-box p { font-size: 32px; }   /* +14% */
.comparison-table th { font-size: 22px; } /* +10% */
.comparison-table td { font-size: 20px; } /* +11% */

/* Slide Capa */
h1 { font-size: 72-80px; }              /* Título principal */
h2 { font-size: 42-46px; }              /* Subtítulo */
p { font-size: 32-36px; }               /* Texto destaque */

/* Número do Slide */
.slide-number { font-size: 16-18px; }
```

### Pesos de Fonte
```css
font-weight: 300;  /* Light - subtítulos, textos secundários */
font-weight: 400;  /* Regular - texto corpo padrão */
font-weight: 600;  /* Semibold - highlights, destaques */
font-weight: 700;  /* Bold - títulos principais */
```

### Line Height
```css
line-height: 1.4;  /* Títulos */
line-height: 1.6;  /* Texto corpo em boxes */
line-height: 1.8;  /* Diagramas, listas */
```

---

## 📦 Componentes (Classes CSS)

### Estrutura Base do Slide
```html
<div class="slide">
    <div class="slide-header">
        <h1>Título do Slide</h1>
        <h2>Subtítulo Explicativo</h2>
    </div>
    <div class="slide-content">
        <!-- Conteúdo aqui -->
    </div>
    <div class="slide-number">X/Y</div>
</div>
```

```css
.slide {
    width: 100vw;
    height: 100vh;
    padding: 50px 80px;
    background: linear-gradient(135deg, #0A1128 0%, #16213e 100%);
    display: flex;
    flex-direction: column;
    page-break-after: always;
    position: relative;
    overflow: hidden;
}

.slide-header {
    border-bottom: 4px solid #FF6700;
    padding-bottom: 20px;
    margin-bottom: 30-40px;
}

.slide-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.slide-number {
    position: absolute;
    bottom: 30px;
    right: 40px;
    font-size: 16-18px;
    color: #666;
}
```

---

### Boxes de Conteúdo

```html
<!-- Box Laranja (Principal) -->
<div class="box box-orange">
    <h3>Título da Seção</h3>
    <p>Conteúdo do box...</p>
</div>

<!-- Box Azul (Info) -->
<div class="box box-blue">
    <h3>Informação Técnica</h3>
    <p>Detalhes...</p>
</div>

<!-- Box Verde (Sucesso) -->
<div class="box box-green">
    <h3>✅ Vantagens</h3>
    <p>Benefícios...</p>
</div>

<!-- Box Roxo (Especial) -->
<div class="box box-purple">
    <h3>🎯 Conceito Avançado</h3>
    <p>Explicação...</p>
</div>

<!-- Box Vermelho (Alerta) -->
<div class="box box-red">
    <h3>⚠️ Atenção</h3>
    <p>Problema ou aviso...</p>
</div>
```

```css
.box {
    background: rgba(255, 255, 255, 0.05);
    padding: 25px 35px;
    margin: 15px 0;
    border-radius: 12px;
    border-left: 6px solid;
}

.box-orange { border-left-color: #FF6700; }
.box-blue { border-left-color: #3b82f6; }
.box-green { border-left-color: #22c55e; }
.box-purple { border-left-color: #a855f7; }
.box-red { border-left-color: #ef4444; }

.box h3 {
    font-size: 28-32px;
    margin-bottom: 15-18px;
    color: #FF6700;
}

.box p {
    font-size: 20-22px;
    color: #d0d0d0;
    line-height: 1.6;
    margin: 10-12px 0;
}
```

---

### Highlight Box (Destaque Central)

```html
<div class="highlight-box">
    <p>Mensagem Principal de Impacto</p>
    <p style="font-size: 20px; margin-top: 10px; color: #a0a0a0;">
        Explicação secundária opcional
    </p>
</div>
```

```css
.highlight-box {
    background: linear-gradient(135deg, rgba(255, 103, 0, 0.2), rgba(168, 85, 247, 0.2));
    border: 3px solid #FF6700;
    padding: 30-35px;
    border-radius: 16px;
    margin: 20-25px 0;
    text-align: center;
}

.highlight-box p {
    font-size: 28-36px;
    font-weight: 600;
    line-height: 1.4-1.5;
    color: white;
}
```

**Quando usar:**
- Conclusão do slide
- Mensagem-chave principal
- Call-to-action
- Regra de ouro / princípio fundamental

---

### Grids (Layouts)

```html
<!-- 2 Colunas -->
<div class="grid-2">
    <div>Coluna 1</div>
    <div>Coluna 2</div>
</div>

<!-- 3 Colunas -->
<div class="grid-3">
    <div>Coluna 1</div>
    <div>Coluna 2</div>
    <div>Coluna 3</div>
</div>
```

```css
.grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 20px 0;
}

.grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
    margin: 20px 0;
}
```

**Quando usar:**
- Grid 2: Comparações, antes/depois, opção A vs B
- Grid 3: Múltiplas opções, categorias, pilares

---

### Tabelas Comparativas

```html
<table class="comparison-table">
    <tr>
        <th>Critério</th>
        <th>Opção A</th>
        <th>Opção B</th>
    </tr>
    <tr>
        <td><strong>Performance</strong></td>
        <td style="color: #22c55e;">Alta</td>
        <td style="color: #ef4444;">Baixa</td>
    </tr>
</table>
```

```css
.comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

.comparison-table th {
    background: rgba(255, 103, 0, 0.2);
    color: #FF6700;
    padding: 15-18px;
    font-size: 20-22px;
    border: 2px solid rgba(255, 103, 0, 0.3);
}

.comparison-table td {
    padding: 15-18px;
    font-size: 18-20px;
    border: 2px solid rgba(255, 255, 255, 0.1);
}
```

**Cores inline para células:**
```css
style="color: #22c55e;"  /* Verde = bom */
style="color: #ef4444;"  /* Vermelho = ruim */
style="color: #fbbf24;"  /* Amarelo = médio */
```

---

### Warning Box (Avisos Importantes)

```html
<div class="warning-box">
    <h3>⚠️ Atenção Crítica</h3>
    <p>Explicação do problema ou risco...</p>
</div>
```

```css
.warning-box {
    background: rgba(239, 68, 68, 0.15);
    border: 3px solid #ef4444;
    padding: 25px;
    border-radius: 12px;
    margin: 15px 0;
}

.warning-box h3 {
    color: #ef4444;
    font-size: 26px;
    margin-bottom: 12px;
}

.warning-box p {
    font-size: 19px;
    color: #fecaca;
    line-height: 1.5;
}
```

---

## 🎯 Emojis e Ícones

### Emojis Padrão por Contexto

**Categorias:**
- 🎯 Objetivo, meta, foco
- ✅ Sucesso, correto, aprovado
- ❌ Erro, incorreto, evitar
- ⚠️ Atenção, cuidado, alerta
- 💡 Ideia, insight, dica
- 🔧 Ferramenta, configuração
- 🚀 Lançamento, início, ação
- 📊 Dados, análise, estatísticas
- 💰 Custo, economia, finanças
- 🔐 Segurança, privado
- 🌐 Internet, web, online
- 📝 Documentação, nota
- 🎨 Design, visual, criativo
- 🤖 IA, automação, bot
- 🧠 Conhecimento, inteligência
- 📚 Aprendizado, educação
- ⚡ Rápido, performance
- 🔍 Busca, análise
- 🎮 Interativo, demo
- 🏆 Melhor, premiado, destaque

**Uso em Títulos:**
```html
<h1>🎯 Objetivo da Aula</h1>
<h1>⚠️ Riscos de Segurança</h1>
<h1>✅ Setup Seguro</h1>
```

**Tamanho grande (capa):**
```html
<div style="font-size: 100-120px; margin: 20px 0;">🧠</div>
```

---

## 📱 Navegação Interativa

### Script de Navegação (sempre incluir)

```javascript
<script>
document.addEventListener('keydown', function(e) {
    const slides = document.querySelectorAll('.slide');
    const currentSlide = Math.floor(window.scrollY / window.innerHeight);
    
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) 
            slides[currentSlide + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSlide > 0) 
            slides[currentSlide - 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'Home') {
        e.preventDefault();
        slides[0].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'End') {
        e.preventDefault();
        slides[slides.length - 1].scrollIntoView({ behavior: 'smooth' });
    }
});

document.addEventListener('click', function(e) {
    const slides = document.querySelectorAll('.slide');
    const currentSlide = Math.floor(window.scrollY / window.innerHeight);
    
    if (e.clientX > window.innerWidth / 2 && currentSlide < slides.length - 1) {
        slides[currentSlide + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.clientX <= window.innerWidth / 2 && currentSlide > 0) {
        slides[currentSlide - 1].scrollIntoView({ behavior: 'smooth' });
    }
});
</script>
```

**Controles disponíveis:**
- ➡️ Seta direita, Espaço, Page Down
- ⬅️ Seta esquerda, Page Up
- 🏠 Home (primeiro slide)
- 🔚 End (último slide)
- 🖱️ Clique direita do slide (próximo)
- 🖱️ Clique esquerda do slide (anterior)

---

## 🎬 Templates de Slides Comuns

### 1. Slide Capa

```html
<div class="slide">
    <div class="slide-content center-content">
        <div style="font-size: 120px; margin: 20px 0;">🎯</div>
        <h1 style="font-size: 80px; color: #FF6700; margin-bottom: 25px;">
            Título Principal
        </h1>
        <h2 style="font-size: 46px; color: #a0a0a0; margin-bottom: 35px;">
            Subtítulo Descritivo
        </h2>
        <p style="margin-top: 50px; font-size: 36px; color: #FF6700;">
            Tagline ou Mensagem Chave
        </p>
    </div>
    <div class="slide-number">1/X</div>
</div>
```

---

### 2. Slide Problema/Solução

```html
<div class="slide">
    <div class="slide-header">
        <h1>❌ O Problema</h1>
        <h2>Descrição do Contexto</h2>
    </div>
    <div class="slide-content">
        <div class="box box-red">
            <h3>Problema 1</h3>
            <p>Explicação...</p>
        </div>
        
        <div class="box box-red">
            <h3>Problema 2</h3>
            <p>Explicação...</p>
        </div>
        
        <div class="highlight-box" style="margin-top: 30px;">
            <p>Impacto Total do Problema</p>
        </div>
    </div>
    <div class="slide-number">2/X</div>
</div>
```

---

### 3. Slide Comparação (2 colunas)

```html
<div class="slide">
    <div class="slide-header">
        <h1>Comparação: A vs B</h1>
        <h2>Qual Escolher?</h2>
    </div>
    <div class="slide-content">
        <div class="grid-2">
            <div class="box box-red">
                <h3>❌ Opção A</h3>
                <p>Característica negativa...</p>
            </div>
            
            <div class="box box-green">
                <h3>✅ Opção B</h3>
                <p>Característica positiva...</p>
            </div>
        </div>
        
        <div class="highlight-box" style="margin-top: 30px;">
            <p>Conclusão da Comparação</p>
        </div>
    </div>
    <div class="slide-number">3/X</div>
</div>
```

---

### 4. Slide Tabela Comparativa

```html
<div class="slide">
    <div class="slide-header">
        <h1>Comparação Detalhada</h1>
        <h2>Múltiplos Critérios</h2>
    </div>
    <div class="slide-content">
        <table class="comparison-table">
            <tr>
                <th>Critério</th>
                <th>Opção 1</th>
                <th>Opção 2</th>
                <th>Opção 3</th>
            </tr>
            <tr>
                <td><strong>Custo</strong></td>
                <td style="color: #22c55e;">Baixo</td>
                <td style="color: #fbbf24;">Médio</td>
                <td style="color: #ef4444;">Alto</td>
            </tr>
        </table>
        
        <div class="highlight-box" style="margin-top: 30px;">
            <p>Recomendação Final</p>
        </div>
    </div>
    <div class="slide-number">4/X</div>
</div>
```

---

### 5. Slide Lista de Conceitos

```html
<div class="slide">
    <div class="slide-header">
        <h1>Principais Conceitos</h1>
        <h2>O Que Você Precisa Saber</h2>
    </div>
    <div class="slide-content">
        <div class="box box-orange">
            <h3>✅ Conceito 1</h3>
            <p>Explicação breve...</p>
        </div>
        
        <div class="box box-blue">
            <h3>✅ Conceito 2</h3>
            <p>Explicação breve...</p>
        </div>
        
        <div class="box box-green">
            <h3>✅ Conceito 3</h3>
            <p>Explicação breve...</p>
        </div>
    </div>
    <div class="slide-number">5/X</div>
</div>
```

---

### 6. Slide Recapitulação

```html
<div class="slide">
    <div class="slide-header">
        <h1>🎯 Recapitulação</h1>
        <h2>Principais Aprendizados</h2>
    </div>
    <div class="slide-content">
        <div class="box box-orange">
            <h3>✅ Aprendizado 1</h3>
            <p>Resumo conciso...</p>
        </div>
        
        <div class="box box-blue">
            <h3>✅ Aprendizado 2</h3>
            <p>Resumo conciso...</p>
        </div>
        
        <div class="box box-green">
            <h3>✅ Aprendizado 3</h3>
            <p>Resumo conciso...</p>
        </div>
        
        <div class="box box-purple">
            <h3>✅ Aprendizado 4</h3>
            <p>Resumo conciso...</p>
        </div>
    </div>
    <div class="slide-number">X/X</div>
</div>
```

---

## 📏 Regras de Simplificação

### Quando Simplificar Slides

**Indicadores de sobrecarga:**
- ❌ Mais de 8 pontos bullet
- ❌ Texto em fonte <18px
- ❌ Mais de 3 boxes no mesmo slide
- ❌ Precisa zoom out para ver tudo
- ❌ Mais de 150 palavras no slide

**Como simplificar:**
1. Dividir em 2 slides
2. Aumentar fontes (+20%)
3. Reduzir texto (resumir)
4. Usar grid para organizar
5. Remover detalhes não-essenciais

---

## ✅ Checklist Antes de Finalizar

### Visual
- [ ] Paleta de cores consistente (laranja #FF6700)
- [ ] Gradiente background em todos os slides
- [ ] Bordas laranja 4px nos headers
- [ ] Emojis nos títulos quando apropriado
- [ ] Fontes legíveis (≥18px corpo, ≥48px títulos)

### Estrutura
- [ ] Numeração correta (1/X ... X/X)
- [ ] Script de navegação incluído
- [ ] Grid usado para comparações
- [ ] Highlight boxes para mensagens-chave
- [ ] Boxes coloridos semanticamente

### Conteúdo
- [ ] Máximo 3-5 conceitos por slide
- [ ] Texto conciso (não monótono)
- [ ] Conclusão/destaque em cada slide
- [ ] Progressão lógica entre slides

### Técnico
- [ ] HTML válido
- [ ] CSS inline ou no <style>
- [ ] Sem dependências externas (só Plotly se necessário)
- [ ] Funciona offline
- [ ] Responsivo (100vw/100vh)

---

## 🎨 Exemplos de Uso

### Exemplo 1: Slide de Alerta de Segurança
```html
<div class="slide">
    <div class="slide-header">
        <h1>⚠️ Riscos de Segurança</h1>
        <h2>Problemas Críticos Identificados</h2>
    </div>
    <div class="slide-content">
        <div class="warning-box">
            <h3>🔴 Vulnerabilidade Crítica</h3>
            <p>Descrição do problema de segurança...</p>
        </div>
        
        <div class="grid-2" style="margin-top: 25px;">
            <div class="box box-red">
                <h3>Impacto</h3>
                <p>• Exposição de dados</p>
                <p>• Acesso não autorizado</p>
            </div>
            
            <div class="box box-green">
                <h3>Mitigação</h3>
                <p>• Atualizar para versão X</p>
                <p>• Aplicar patch de segurança</p>
            </div>
        </div>
        
        <div class="highlight-box" style="margin-top: 25px;">
            <p>⚠️ Atualização Obrigatória Antes de Uso</p>
        </div>
    </div>
    <div class="slide-number">X/Y</div>
</div>
```

---

### Exemplo 2: Slide Técnico com Grid 3

```html
<div class="slide">
    <div class="slide-header">
        <h1>🔧 Opções de Ferramentas</h1>
        <h2>Escolha a Melhor para Seu Caso</h2>
    </div>
    <div class="slide-content">
        <div class="grid-3">
            <div class="box box-blue">
                <h3>Ferramenta A</h3>
                <p>✅ Simples</p>
                <p>✅ Grátis</p>
                <p>❌ Limitada</p>
                <p style="margin-top: 15px; color: #22c55e;">
                    <strong>Ideal: Começar</strong>
                </p>
            </div>
            
            <div class="box box-green">
                <h3>Ferramenta B</h3>
                <p>✅ Completa</p>
                <p>✅ Escalável</p>
                <p>❌ Pago</p>
                <p style="margin-top: 15px; color: #22c55e;">
                    <strong>Ideal: Produção</strong>
                </p>
            </div>
            
            <div class="box box-purple">
                <h3>Ferramenta C</h3>
                <p>✅ Controle total</p>
                <p>✅ Performance</p>
                <p>❌ Complexo</p>
                <p style="margin-top: 15px; color: #22c55e;">
                    <strong>Ideal: Avançado</strong>
                </p>
            </div>
        </div>
        
        <div class="highlight-box" style="margin-top: 30px;">
            <p>Comece Simples → Escale Conforme Necessário</p>
        </div>
    </div>
    <div class="slide-number">X/Y</div>
</div>
```

---

## 🚀 Template Base Completo

Use este como ponto de partida para novas apresentações:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Apresentação - Madson Magalhães</title>
    <style>
        @page { size: A4 landscape; margin: 0; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', sans-serif; 
            background: #0A1128; 
            color: white; 
            overflow-x: hidden; 
        }
        .slide { 
            width: 100vw; 
            height: 100vh; 
            padding: 50px 80px; 
            background: linear-gradient(135deg, #0A1128 0%, #16213e 100%); 
            display: flex; 
            flex-direction: column; 
            page-break-after: always; 
            position: relative; 
            overflow: hidden; 
        }
        .slide-number { 
            position: absolute; 
            bottom: 30px; 
            right: 40px; 
            font-size: 18px; 
            color: #666; 
        }
        .slide-header { 
            border-bottom: 4px solid #FF6700; 
            padding-bottom: 20px; 
            margin-bottom: 30px; 
        }
        .slide-header h1 { 
            font-size: 52px; 
            color: #FF6700; 
            margin-bottom: 10px; 
            font-weight: 700; 
        }
        .slide-header h2 { 
            font-size: 26px; 
            color: #a0a0a0; 
            font-weight: 300; 
        }
        .slide-content { 
            flex: 1; 
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
        }
        .center-content { 
            text-align: center; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            height: 100%; 
        }
        .box { 
            background: rgba(255, 255, 255, 0.05); 
            padding: 25px 35px; 
            margin: 15px 0; 
            border-radius: 12px; 
            border-left: 6px solid; 
        }
        .box-orange { border-left-color: #FF6700; }
        .box-blue { border-left-color: #3b82f6; }
        .box-green { border-left-color: #22c55e; }
        .box-purple { border-left-color: #a855f7; }
        .box-red { border-left-color: #ef4444; }
        .box h3 { 
            font-size: 32px; 
            margin-bottom: 18px; 
            color: #FF6700; 
        }
        .box p { 
            font-size: 22px; 
            color: #d0d0d0; 
            line-height: 1.6; 
            margin: 12px 0; 
        }
        .grid-2 { 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 30px; 
            margin: 20px 0; 
        }
        .grid-3 { 
            display: grid; 
            grid-template-columns: 1fr 1fr 1fr; 
            gap: 25px; 
            margin: 20px 0; 
        }
        .highlight-box { 
            background: linear-gradient(135deg, rgba(255, 103, 0, 0.2), rgba(168, 85, 247, 0.2)); 
            border: 3px solid #FF6700; 
            padding: 35px; 
            border-radius: 16px; 
            margin: 25px 0; 
            text-align: center; 
        }
        .highlight-box p { 
            font-size: 32px; 
            font-weight: 600; 
            line-height: 1.5; 
            color: white; 
        }
        .comparison-table { 
            width: 100%; 
            border-collapse: collapse; 
            margin: 20px 0; 
        }
        .comparison-table th { 
            background: rgba(255, 103, 0, 0.2); 
            color: #FF6700; 
            padding: 18px; 
            font-size: 22px; 
            border: 2px solid rgba(255, 103, 0, 0.3); 
        }
        .comparison-table td { 
            padding: 18px; 
            font-size: 20px; 
            border: 2px solid rgba(255, 255, 255, 0.1); 
        }
    </style>
</head>
<body>

<!-- SLIDE 1: CAPA -->
<div class="slide">
    <div class="slide-content center-content">
        <div style="font-size: 120px; margin: 20px 0;">🎯</div>
        <h1 style="font-size: 80px; color: #FF6700; margin-bottom: 25px;">
            Título da Apresentação
        </h1>
        <h2 style="font-size: 46px; color: #a0a0a0; margin-bottom: 35px;">
            Subtítulo Descritivo
        </h2>
        <p style="margin-top: 50px; font-size: 36px; color: #FF6700;">
            Mensagem Chave
        </p>
    </div>
    <div class="slide-number">1/X</div>
</div>

<!-- ADICIONE MAIS SLIDES AQUI -->

<script>
document.addEventListener('keydown', function(e) {
    const slides = document.querySelectorAll('.slide');
    const currentSlide = Math.floor(window.scrollY / window.innerHeight);
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) slides[currentSlide + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSlide > 0) slides[currentSlide - 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'Home') {
        e.preventDefault();
        slides[0].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'End') {
        e.preventDefault();
        slides[slides.length - 1].scrollIntoView({ behavior: 'smooth' });
    }
});

document.addEventListener('click', function(e) {
    const slides = document.querySelectorAll('.slide');
    const currentSlide = Math.floor(window.scrollY / window.innerHeight);
    if (e.clientX > window.innerWidth / 2 && currentSlide < slides.length - 1) {
        slides[currentSlide + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.clientX <= window.innerWidth / 2 && currentSlide > 0) {
        slides[currentSlide - 1].scrollIntoView({ behavior: 'smooth' });
    }
});
</script>

</body>
</html>
```

---

## 📚 Referências de Uso

Esta skill foi aplicada com sucesso em:
- ✅ Aula 6: Docker MCP Toolkit (7 slides)
- ✅ Aula 7: Claude Desktop Deep Dive (14 slides)
- ✅ Aula 8: OpenClaw Agente Autônomo (8 slides)
- ✅ Aula 9: RAG + Obsidian (15 slides)

**Características comuns:**
- Público não-técnico (contadores, advogados, engenheiros)
- Projeção em telão
- 25-35 minutos duração
- Mix teoria + prática
- Demos ao vivo integradas

---

## 🎯 Quando NÃO Usar Esta Skill

**Não usar para:**
- ❌ Documentos impressos (usar docx skill)
- ❌ PDFs estáticos (usar pdf skill)
- ❌ Websites públicos (precisa hosting)
- ❌ Mobile-first (otimizado para desktop/projeção)
- ❌ Públicos que preferem minimalismo extremo

**Use outras skills para:**
- Word docs → `docx` skill
- PDFs → `pdf` skill  
- Websites → `frontend-design` skill
- Relatórios → `internal-comms` skill (se existir)

---

**Fim da Skill. Use este padrão para manter consistência visual em todas as apresentações!** 🎨