import math

def bhaskara(a, b, c):
    # Verifica se o valor de 'a' é diferente de zero
    if a == 0:
        return "O valor de 'a' deve ser diferente de zero."
    
    # Calcula o discriminante (delta)
    delta = b**2 - 4*a*c
    
    # Verifica as condições para as raízes
    if delta < 0:
        return "A equação não possui raízes reais."
    elif delta == 0:
        x = -b / (2*a)
        return f"A equação possui uma raiz real: x = {x}"
    else:
        x1 = (-b + math.sqrt(delta)) / (2*a)
        x2 = (-b - math.sqrt(delta)) / (2*a)
        return f"A equação possui duas raízes reais: x1 = {x1}, x2 = {x2}"

# Exemplo de uso
a = float(input("Entre com o valor de a: "))
b = float(input("Entre com o valor de b: "))
c = float(input("Entre com o valor de c: "))

resultado = bhaskara(a, b, c)
print(resultado)