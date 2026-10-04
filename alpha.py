from flask import Flask, render_template
from flask import request   #para trabalhar com os métodos GET e POST
from flask import flash     #para msgs popup
from flask import redirect  #para redirecionar páginas

meu_site = Flask(__name__ , template_folder='t_templates')  #cria o objeto meu_site, que é uma instância da classe Flask

@meu_site.route('/')
@meu_site.route('/ola')
def raiz():   #esta função está vinculada a rota raiz e a rota /ola
    return render_template('t_index.html')  #retorna o arquivo index.html que está na pasta templates

#@meu_site.route('/ola/<id>')
#def saudacao(id):   #esta função está vinculada a rota raiz e a rota /ola
    #return 'Olá, Turma 2025!'
#    return render_template('homepage_nome.html', nome=id)  #retorna o arquivo index.html que está na pasta templates

@meu_site.route('/usuario/<p_nome>/<p_profissao>/<p_disciplina>')
def info_usuario(p_nome, p_profissao, p_disciplina):
    dados_usu = {"nome": p_nome, "profissao": p_profissao, "disciplina":p_disciplina}
    return render_template("t_usuario.html", dados = dados_usu)

@meu_site.route('/index')
def index():   #esta função está vinculada a rota /index
    return render_template('t_index.html', nome = 'Pedro')  #retorna o arquivo index.html que está na pasta templates

@meu_site.route('/contato')
def contato():
    #return 'e-mail:mariela@ifro.edu.br'
    return render_template('t_contato.html')  #retorna o arquivo contato.html que está na pasta templates

@meu_site.route('/login')
def login():
    return render_template('t_login_flash_js_cadastro.html')

@meu_site.route('/autenticar', methods=['GET','POST'])
def autenticar():
    nome_usuario = request.form.get('nome_usuario')
    senha = request.form.get('senha')
    return f"Usuário: {nome_usuario} - Senha: {senha}"

@meu_site.route('/usuario')
def dados_usuario():
    #nome_usuario="Mariela"
    dados_usu = {"nome": "Pedro", "profissao": "Guarda Civil", "disciplina":"Desenvolvimento Web III"}
    return render_template("t_usuario.html", dados = dados_usu)
                                           #parâmetro recebe argumento
                                           #colocar o site no ar

#nome = request.args.get("nome")
@meu_site.route('/rota2')
def rota2():
    #return 'Olá, Turma 2025!'
    return render_template('rota2.html')  #retorna o arquivo rota2.html que está na pasta templates


#esta função não está vinculado a rota, mas pode ser usada dentro de uma rota ou outra função ou invocada de fora
def saudacaoes(nome): 
    return f"Boa noite, {nome}!. Tudo bem?"

#maiores detalhes nos slides que estão no AVA.
if __name__ == '__main__':  #verifica se o arquivo está sendo executado diretamente, e não importado
    meu_site.run(port=7000)

meu_site.run( port=6000)    #executa caso o o arquivo seja importado, mas não é uma boa prática, pois pode gerar conflito de portas