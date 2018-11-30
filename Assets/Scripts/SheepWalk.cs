using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
public class SheepWalk : MonoBehaviour
{
    static Animator anim;
    public float speed = 7f;
    public float rotationSpeed = 75.0f;
    public float duration = 1f;
    float elapsedTime = Mathf.Infinity;
    public Quaternion TargetRotation;
    public ParticleSystem ps;
    public bool move = true;
    public GameObject DeathMenu;
    public GameObject NextLevel;
    public bool codeIsTerminated = false;
    public bool win = false;
    void Start()
    {
        anim = GetComponent<Animator>();
        DeathMenu.SetActive(false);
        NextLevel.SetActive(false);
    }

    void Update()
    {
        // float translation = Input.GetAxis("Vertical") * speed;
        // float rotation = Input.GetAxis("Horizontal") * rotationSpeed;

        // translation *= Time.deltaTime;
        // rotation *= Time.deltaTime;

        // if (move) {
        // transform.Translate(0, 0, translation);
        // transform.Rotate(0, rotation, 0);
        // }

        // if (translation != 0 || rotation != 0)
        // {
        //     anim.SetBool("isWalking", true);
        // }
        // else
        // {
        //     anim.SetBool("isWalking", false);
        // }

        // if (Input.GetKeyDown(KeyCode.Space)) {
        //    TerminateCode();
        // }
        // if (Input.GetKeyDown(KeyCode.Q)) {
        //     StartCoroutine(SheepMoveForward());
        // }
        if (codeIsTerminated == true && win == false) {
            ReturnPosition();
            codeIsTerminated = false;
        }
    }

    public void RestartLevelOne() {
        SceneManager.LoadScene("Level_1");
    }

    void BlockyMove() {
        if (move) {
            StartCoroutine(SheepMoveForward());
        }
    }
    IEnumerator SheepMoveForward()
    {
        if (move) {
            float elapsedTime = 0f;
            while (elapsedTime < duration)
            {
                transform.Translate(Vector3.forward * Time.deltaTime * 6f);
                elapsedTime += Time.deltaTime;
                anim.SetBool("isWalking", true);
                yield return null;
            }
        }
    }
    void TurnNinety() {
        if (move) {
            transform.Rotate(0, 90, 0);
            anim.SetBool("isWalking", true);
        }
    }
       void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.name == "Plane")
        {
            transform.position = new Vector3(5.2f, .79f, .62f);
            transform.eulerAngles = new Vector3(0, 228, 0);
            DeathMenu.SetActive(true);
        }
        if (other.gameObject.name == "Win")
        {
            win = true;
            anim.SetBool("isWalking", false);
            anim.SetBool("isWin", true);
            ps.Play();
            NextLevel.SetActive(true);
            move = false;
        }
    }

    void ReturnPosition() {
        transform.position = new Vector3(5.2f, .79f, .62f);
        transform.eulerAngles = new Vector3(0, 228, 0);
    }
    void TerminateCode() {
        codeIsTerminated = true;
    }
}
