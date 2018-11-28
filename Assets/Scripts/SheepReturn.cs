using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SheepReturn : MonoBehaviour {
    static Animator anim;
	void Start() {
		anim = GetComponent<Animator>();
	}
	public void Returning() {
        StartCoroutine(ReturnPosition());
    }
	IEnumerator ReturnPosition() {
		yield return new WaitForSeconds(1f);
		anim.SetBool("isWalking", false);
		transform.position = new Vector3(5.2f, .79f, .62f);
        transform.eulerAngles = new Vector3(0, 228, 0);
	}
}
